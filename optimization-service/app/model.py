# model.py

import pandas as pd
import gurobipy as gp
from gurobipy import GRB
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/optimize', methods=['POST'])
def optimize():
    data = request.json
    distances = pd.DataFrame(data['distances'])

    employees = distances.index.tolist()
    offices = distances.columns.tolist()

    # Create a Gurobi model
    model = gp.Model('EmployeeOfficeAssignment')

    # Decision variables
    assignment = model.addVars(employees, offices, vtype=GRB.BINARY, name="Assign")

    # Objective: minimize distances
    objective = gp.quicksum(assignment[e, o] * distances.loc[e, o] for e in employees for o in offices)
    model.setObjective(objective, GRB.MINIMIZE)

    # Constraints
    # Each employee assigned to exactly one office
    for e in employees:
        model.addConstr(assignment.sum(e, '*') == 1, name=f"OneOffice_{e}")

    # Office capacities (example with each office capacity set to 2)
    for o in offices:
        model.addConstr(assignment.sum('*', o) <= 2, name=f"Cap_{o}")

    # Optimize the model
    model.optimize()

    # Collect the optimal solution
    if model.status == GRB.OPTIMAL:
        solution = model.getAttr('X', assignment)
        result = {e: {o: solution[e, o] for o in offices if solution[e, o] > 0.5} for e in employees}
        return jsonify(result)
    else:
        return jsonify({"error": "No optimal solution found"}), 400

if __name__ == '__main__':
    app.run(port=8000, debug=True)
