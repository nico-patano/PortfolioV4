import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
// import logo from "./logo.svg";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="p-2 p-md-3">
        <section className="mx-auto px-3 bg-white border h-100 rounded">
        {renderPage()}
        </section>
      </main>
      <Footer />
    </>
  );
}
