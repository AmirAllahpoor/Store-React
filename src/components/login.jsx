import axios from "axios"
import { useForm } from "react-hook-form"

export default function LoginPage() {

  
  const tokenAuth = localStorage.getItem('tokenUser')

  const {register , handleSubmit} = useForm()

   async function SubmitHandle(data) {

        await axios.post("https://reqres.in/api/login" , data ).then((res) => {
          localStorage.setItem('tokenUser' , res.data.token)
          window.location = "/store"
        })
    }

    return (
      <>
      {
        !tokenAuth ? (
           <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-5  ">
          <div className="item-hints">
                <div className="hint" data-position="4">
           <span className="hint-radius"></span>
               <span className="hint-dot">~ Login Guide ~</span>
                 <div className="hint-content do--split-children">
                 <p>Email : eve.holt@reqres.in</p>
                 <p>Pass : cityslicka</p>
                </div>
             </div>
            </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="../../public/vite.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login Or SignUp
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(SubmitHandle)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    className=" h-[2.7rem] block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                    {...register('email')}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block h-[2.7rem] w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                    {...register('password')}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="h-[2.7rem] pt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  
                >
                  Login / SignUp
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
        </>
        ) : window.location = '/'
      }
      </>
    )
  }
  