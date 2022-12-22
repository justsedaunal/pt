import Head from 'next/head'
import Layout from '../layout/layout'

export default function Login() {
    return (
        <Layout>
             <Head>
                <title>login</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10 items-center' >
                <div className="title">
                    <h2 className="text-black text-start font-bold" >Hello!</h2>
                    <p className="text-neutral-800">Sign Up To Get Started</p>
                </div>

                <form className="flex flex-col gap-5" >
                    <div className="input-group" >
                        <input
                        className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                         type="text" 
                        name="name"
                        placeholder='Full Name'/>
                    </div>
                  
                    <div className="input-group" >
                        <input
                        className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                         type="email" 
                        name="email"
                        placeholder='Email Address'/>
                    </div>

                    <div className="input-group" >
                        <input
                        className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                         type="password" 
                        name="password"
                        placeholder='Password'/>
                    </div>

                    <div className="input-button">
                        <button type="submit" className="bg-btn w-80 h-10 rounded-3xl" >Register</button>
                    </div>
                  
                </form>
            </section>
        </Layout>
    )
}