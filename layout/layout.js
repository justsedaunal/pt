import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <div className="flex h-screen bg-blue-400">
          <div className="bg-grad  w-3/5 h-screen lg:grid-cols" >
            <div className="flex items-start h-screen flex-col justify-center px-40 gap-1" >
                <h1 className="text-3xl font-bold" >PitonShop</h1>
                <p>The most popular book shop for IT</p>
            </div>
          </div>

          <div className=" flex flex-col justify-evenly bg-white w-2/5">
            <div className="text-center " >
                {children}
            </div>

          </div>


        </div>
    )

}