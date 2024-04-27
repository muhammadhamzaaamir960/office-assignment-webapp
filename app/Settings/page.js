import SideNavbar from "../components/SideNavbar";
import Header from '../components/Header';
import Logo from '../components/Logo';

export const metadata = {
  title: "Settings Page",
};

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-semibold mb-6">Settings</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="universityId" className="block text-sm font-medium text-gray-700">University ID</label>
                <input type="text" id="universityId" name="universityId" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div className="col-span-2">
                <label htmlFor="officeLocation" className="block text-sm font-medium text-gray-700">Office Location</label>
                <input type="text" id="officeLocation" name="officeLocation" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">Faculty</label>
                <input type="text" id="faculty" name="faculty" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" id="department" name="department" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
            </div>
          </div>
          <Logo />
        </main>
      </div>
    </div>
  );
}

export default SettingsPage;
