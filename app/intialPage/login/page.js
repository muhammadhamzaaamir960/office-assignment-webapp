const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
        {/* The semi circle/oval shape and inserted a picture of our UNI there */}
        <div className="absolute top-0 right-0 bg-blue-950 h-full w-1/2 flex justify-end items-center" style={{ clipPath: "ellipse(50% 100% at 100% 50%)" }}>
          <img src="/BAU-Istanbul-login-rightSide-image.png" alt="Background" className="h-full" style={{ objectFit: 'cover', width: 'auto', maxHeight: '100%' }} />
        </div>
  
        <div className="z-10 px-10 py-8 mt-4 text-left bg-slate-200 shadow-lg border rounded-md">
          <div className="flex justify-center mb-4">
            <img src="/Bahçeşehir_Üniversitesi_logo.png" alt="Logo" className="h-28 w-24" />
          </div>
  
          <h3 className="text-2xl font-bold text-center text-blue-950">Login to your account</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block text-blue-950" htmlFor="email">Email</label>
                <input type="text" placeholder="Email" 
                  id="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-blue-950">Password</label>
                <input type="password" placeholder="Password" 
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  