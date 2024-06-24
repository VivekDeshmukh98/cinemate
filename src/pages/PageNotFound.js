import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {

  useEffect(()=>{
    document.title=`Page Not Found `;    
  })


  return (
    <main className="flex items-center justify-center min-h-screen bg-white dark:bg-darkbg">
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-white dark:bg-darkbg text-center">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-900 dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
          <Link to="/" className="inline-flex items-center text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
};
