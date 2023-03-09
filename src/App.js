import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecipesSection from "./components/RecipiesSection";
import FilterSection from "./components/FilterSection";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

const APP_ID = "5939d5bb";
const APP_KEY = "36beee5c359bee2f25f2708bf8230568";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("meat");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(recipes.length / recordsPerPage);

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line
  }, [query, currentPage]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=18`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setCurrentPage(1);
  };

  return (
    <div className='app'>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <HeroSection />
                <FilterSection
                  handleSubmit={handleSubmit}
                  value={search}
                  handleChange={handleChange}
                />

                {loading ? (
                  <Loader />
                ) : recipes.length === 0 ? (
                  <div className='no-content'>
                    <i className='uil uil-heart-break'></i>
                    Oh no! We don't seem to have the recipe you're looking for.
                  </div>
                ) : (
                  <>
                    <div className='recipes-wrapper'>
                      {recipes
                        .slice(indexOfFirstRecord, indexOfLastRecord)
                        .map(({ recipe }, index) => (
                          <>
                            <RecipesSection
                              key={index}
                              image={recipe.image}
                              label={recipe.label}
                              dishType={recipe.dishType}
                              calories={recipe.calories}
                              totalWeight={recipe.totalWeight}
                              ingredients={recipe.ingredients}
                              link={recipe.url}
                            />
                          </>
                        ))}
                    </div>
                    <Pagination
                      nPages={nPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
