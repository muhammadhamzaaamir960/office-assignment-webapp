import SideNavbar from '../components/SideNavbar';
import Header from '../components/Header';
import Logo from '../components/Logo';

export const metadata = {
  title: "Office Assignment Page",
};

const OfficeAssignmentPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Office Assignment</h1>
            <Logo /> 
          </div>
          <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="assignee" className="block text-sm font-medium text-gray-700">Assignee</label>
                <input type="text" id="assignee" name="assignee" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select id="status" name="status" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50">
                  <option>Not Started</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <select id="department" name="department" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50">
                  <option>Choose...</option>
                  <option>Software Engineering</option>
                  <option>Industrial Engineering</option>
                  <option>Biomedical Engineering</option>
                </select>
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                <select id="priority" name="priority" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50">
                  <option>Low Priority</option>
                  <option>Medium Priority</option>
                  <option>High Priority</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="description" name="description" rows="4" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-700 transition ease-in-out duration-150">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="fixed bottom-0 w-full">
            <Logo />
          </div>
        </main>
      </div>
    </div>
  );
};

export default OfficeAssignmentPage;
