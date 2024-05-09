const { db } = require('./dbinit');
const exceljs = require('exceljs');

async function getOfficeAssignments() {
    const query = `
        SELECT oa.id, u.username AS user, o.office_number AS office, oa.assigned_date
        FROM office_assignments oa
        JOIN users u ON oa.user_id = u.id
        JOIN offices o ON oa.office_id = o.id
    `;
    return db.prepare(query).all();
}

// generates excel file for office assignments
async function generateOfficeAssignmentsExcel() {
    const data = await getOfficeAssignments();

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Office Assignments');

    // adds the headers
    worksheet.addRow(['ID', 'User', 'Office', 'Assigned Date']);

    // data additions
    data.forEach(row => {
        worksheet.addRow([row.id, row.user, row.office, row.assigned_date]);
    });

    // saves the workbook
    await workbook.xlsx.writeFile('office_assignments.xlsx');
}

module.exports = {
    getOfficeAssignments,
    generateOfficeAssignmentsExcel
};
