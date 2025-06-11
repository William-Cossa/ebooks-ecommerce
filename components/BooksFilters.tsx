// components/BooksFilters.tsx (Client Component)
"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Search, X } from "lucide-react";

interface BooksFiltersProps {
  allGenres: string[];
  searchParams: {
    search?: string;
    format?: string;
    genres?: string | string[];
  };
  hasActiveFilters: boolean;
}

export default function BooksFilters({
  allGenres,
  searchParams,
  hasActiveFilters,
}: BooksFiltersProps) {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const updateSearchParams = (key: string, value: string | string[] | null) => {
    const params = new URLSearchParams(currentSearchParams.toString());

    if (value) {
      // Remove existing params for this key
      params.delete(key);

      // Add new values
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else {
        params.set(key, value);
      }
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`/books?${params.toString()}`);
    });
  };

  const resetFilters = () => {
    startTransition(() => {
      router.push("/books");
    });
  };

  const handleGenreChange = (genre: string, checked: boolean) => {
    const currentGenres = searchParams.genres
      ? Array.isArray(searchParams.genres)
        ? searchParams.genres
        : [searchParams.genres]
      : [];

    let newGenres: string[];
    if (checked) {
      newGenres = [...currentGenres, genre];
    } else {
      newGenres = currentGenres.filter((g) => g !== genre);
    }

    updateSearchParams("genres", newGenres.length > 0 ? newGenres : null);
  };

  const isGenreSelected = (genre: string): boolean => {
    if (!searchParams.genres) return false;
    const selectedGenres = Array.isArray(searchParams.genres)
      ? searchParams.genres
      : [searchParams.genres];
    return selectedGenres.includes(genre);
  };

  const handleSearchChange = (value: string) => {
    updateSearchParams("search", value || null);
  };

  const handleFormatChange = (value: string) => {
    updateSearchParams("format", value || null);
  };

  return (
    <>
      {/* Filters - Desktop */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-20 space-y-6">
          <div>
            <h2 className="font-semibold mb-4">Filtros</h2>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="mb-4 text-muted-foreground"
                disabled={isPending}
              >
                <X className="h-4 w-4 mr-1" />
                Limpar filtros
              </Button>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="search">Busca</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    type="search"
                    placeholder="Buscar..."
                    className="pl-8 pr-4"
                    defaultValue={searchParams.search || ""}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    disabled={isPending}
                  />
                </div>
              </div>

              <div>
                <Label>Formato</Label>
                <RadioGroup
                  value={searchParams.format || ""}
                  onValueChange={handleFormatChange}
                  className="mt-2 space-y-2"
                  disabled={isPending}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="" id="format-all" />
                    <Label
                      htmlFor="format-all"
                      className="font-normal cursor-pointer"
                    >
                      Todos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ebook" id="format-ebook" />
                    <Label
                      htmlFor="format-ebook"
                      className="font-normal cursor-pointer"
                    >
                      eBook
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="livro" id="format-livro" />
                    <Label
                      htmlFor="format-livro"
                      className="font-normal cursor-pointer"
                    >
                      Livro Físico
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Gêneros</Label>
                <div className="mt-2 space-y-2">
                  {allGenres.map((genre) => (
                    <div key={genre} className="flex items-center space-x-2">
                      <Checkbox
                        id={`genre-${genre}`}
                        checked={isGenreSelected(genre)}
                        onCheckedChange={(checked) =>
                          handleGenreChange(genre, checked as boolean)
                        }
                        disabled={isPending}
                      />
                      <Label
                        htmlFor={`genre-${genre}`}
                        className="font-normal cursor-pointer"
                      >
                        {genre}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Catálogo</h1>
        <Button
          variant="outline"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="flex items-center"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Mobile Filters */}
      {isFilterVisible && (
        <div className="md:hidden p-4 bg-card border rounded-lg mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Filtros</h2>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-muted-foreground"
                disabled={isPending}
              >
                <X className="h-4 w-4 mr-1" />
                Limpar
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="mobile-search">Busca</Label>
              <div className="relative mt-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="mobile-search"
                  type="search"
                  placeholder="Buscar..."
                  className="pl-8 pr-4"
                  defaultValue={searchParams.search || ""}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  disabled={isPending}
                />
              </div>
            </div>

            <div>
              <Label>Formato</Label>
              <RadioGroup
                value={searchParams.format || ""}
                onValueChange={handleFormatChange}
                className="mt-2 space-y-2"
                disabled={isPending}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="" id="mobile-format-all" />
                  <Label
                    htmlFor="mobile-format-all"
                    className="font-normal cursor-pointer"
                  >
                    Todos
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ebook" id="mobile-format-ebook" />
                  <Label
                    htmlFor="mobile-format-ebook"
                    className="font-normal cursor-pointer"
                  >
                    eBook
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="livro" id="mobile-format-livro" />
                  <Label
                    htmlFor="mobile-format-livro"
                    className="font-normal cursor-pointer"
                  >
                    Livro Físico
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="flex items-center justify-between">
                Gêneros
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFilterVisible(false)}
                  className="text-muted-foreground"
                >
                  Concluído
                </Button>
              </Label>
              <div className="mt-2 space-y-2">
                {allGenres.map((genre) => (
                  <div key={genre} className="flex items-center space-x-2">
                    <Checkbox
                      id={`mobile-genre-${genre}`}
                      checked={isGenreSelected(genre)}
                      onCheckedChange={(checked) =>
                        handleGenreChange(genre, checked as boolean)
                      }
                      disabled={isPending}
                    />
                    <Label
                      htmlFor={`mobile-genre-${genre}`}
                      className="font-normal cursor-pointer"
                    >
                      {genre}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
