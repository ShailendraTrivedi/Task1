import React, { useState } from "react";
import Card from "../helpers/Card";
import CardData from "../helpers/CardData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const itemsPerPage = 3;

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = CardData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(CardData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="space-y-10 sm:p-20 p-10">
      <div className="text-4xl">Latest Articles</div>
      <div className="grid sm:grid-cols-3 gap-10">
        {currentItems.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            heading={item.heading}
            content={item.content}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="border-2 border-black font-bold py-2 px-4 rounded"
        >
          <ChevronLeft absoluteStrokeWidth />
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="border-2 border-black  font-bold py-2 px-4 rounded"
        >
          <ChevronRight absoluteStrokeWidth />
        </button>
      </div>
    </div>
  );
};

export default Articles;
