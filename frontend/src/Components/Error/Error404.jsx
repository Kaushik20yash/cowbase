import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


function Error404() {
  return (
    <div>
      <html className="h-screen">
        <body className="flex h-full">
          <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <header className="mb-auto flex justify-center z-50 w-full py-4">
              <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <Link to="/" className="btn flex justify-center items-center btn-ghost font-tiltWrap font-[900] text-2xl text-black">
                <div className="w-[3rem] ">
                    <img src={logo} alt="Logo" />
                </div>
                Coinsavvy
                </Link>
              </nav>
            </header>


            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Your questions, answered
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Answers to the most frequently asked questions.
        </p>
      </div>


      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              What is collaborative budgetting?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Budgeting in our app allows multiple users to work together on a shared budget.
              You can invite family members or friends, allocate expenses,
               and track financial goals collectively.
              </p>
            </div>
          </div>


          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              How does expense tracking help me manage my finances better?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Expense tracking is a crucial feature for understanding where your money goes. Our webapp helps you categorize and visualize expenses,
              making it easier to identify spending patterns, set realistic budgets, and make informed financial decisions.
              </p>
            </div>
          </div>


          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
               Is my financial data safe and secure on this platform?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Absolutely! We prioritize the security of your financial information.
              We follows strict security measures to ensure that your data remains confidential and protected.
              </p>
            </div>
          </div>


          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              How does the collaborative budgeting feature handle shared expenses among users?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Our collaborative budgeting feature simplifies shared expenses.
              Users can input shared costs, split bills, and track who owes what.
              It's an efficient way to manage joint finances and avoid any confusion among collaborators.
              </p>
            </div>
          </div>


          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
            >
               Can I set financial goals and monitor my progress within the app?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-five"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Yes, setting financial goals is a key aspect of our app. You can establish savings targets,
              debt repayment goals, or any other financial objectives.
               The app provides visual progress tracking, keeping you motivated on your financial journey.
              </p>
            </div>
          </div>


          <div
            className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-six"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
            >
              How does this webapp help in increasing my Financial literacy?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-six"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <p className="text-gray-800 dark:text-gray-200">
              There are many ways to increase your financial literacy with our webapp.
               You can read out the blogs and articles published by us on the website to keep your knowledge up to date.
               This really enhances your skills to make and follow and strict budget, Hence improving your personal finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


            <footer className="mt-auto text-center py-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-gray-500">
                 
                </p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </div>
  );
}


export default Error404;





