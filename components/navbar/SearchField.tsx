"use client";
import { ArrowRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function SearchField() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/books?search=${encodeURIComponent(
        searchQuery.trim()
      )}`;
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-[200px] lg:w-[300px] space-y-2 "
    >
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar livros..."
        className="pl-8 pr-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit" className="h-8">
        {" "}
        Pesquisar
      </Button>
    </form>
  );
}

export default SearchField;
