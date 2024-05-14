# optimization-service/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import gurobipy as gp
from gurobipy import GRB

app = FastAPI()

class OptimizationInput(BaseModel):
    preferences_path: str
    distances_path: str

@app.post("/optimize")
def run_optimization(input: OptimizationInput):
    try:
        preferences = pd.read_csv(input.preferences_path, index_col=0)
        distances = pd.read_csv(input.distances_path, index_col=0)

        employees = preferences.index.tolist()
        offices = preferences.columns.tolist()

        model = gp.Model('EmployeeOfficeAssignment')

        assignment = model.addVars(employees, offices, vtype=GRB.BINARY, name="Assign")

        objective = gp.quicksum(assignment[e, o] * preferences.loc[e, o] for e in employees for o in offices)
        model.setObjective(objective, GRB.MAXIMIZE)

        for e in employees:
            model.addConstr(assignment.sum(e, '*') == 1, name=f"OneOffice_{e}")

        for o in offices:
            model.addConstr(assignment.sum('*', o) <= 2, name=f"Cap_{o}")

        model.optimize()

        results = {
            "status": "success",
            "assignments": [
                {"employee": e, "office": o} for e in employees for o in offices if assignment[e, o].X > 0.5
            ]
        }
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
