
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";

// Recipe Data
const recipes = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake perfect for any occasion",
    category: "desserts",
    ingredients: ["2 cups flour", "1 cup sugar", "3 eggs", "1 cup milk"],
    instructions: [
      "Mix dry ingredients",
      "Add wet ingredients",
      "Bake at 350°F for 25 minutes",
    ],
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce",
    category: "dinner",
    ingredients: ["Spaghetti", "Eggs", "Pecorino cheese", "Black pepper"],
    instructions: [
      "Cook pasta",
      "Mix eggs and cheese",
      "Combine while hot",
    ],
  },
  {
    id: 3,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    category: "lunch",
    ingredients: ["Tomatoes", "Cucumber", "Feta cheese", "Olives"],
    instructions: [
      "Chop vegetables",
      "Add feta cheese and olives",
      "Mix with olive oil",
    ],
  },
  {
    id: 4,
    title: "Breakfast Smoothie Bowl",
    description: "Healthy and colorful breakfast bowl",
    category: "breakfast",
    ingredients: ["Banana", "Strawberries", "Milk", "Granola"],
    instructions: [
      "Blend banana and strawberries",
      "Add milk",
      "Top with granola and serve",
    ],
  },
];

// Categories
const categories = [
  { id: "breakfast", name: "Breakfast", description: "Start your day right" },
  { id: "lunch", name: "Lunch", description: "Midday favorites" },
  { id: "dinner", name: "Dinner", description: "Evening meals" },
  { id: "desserts", name: "Desserts", description: "Sweet treats" },
];

// Navbar
function Navbar() {
  const navStyle = ({ isActive }) =>
    `text-lg ${isActive ? "text-pink-600 font-bold" : "text-gray-600 hover:text-pink-600"}`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-pink-600">
          Recipe Book
        </Link>

        <div className="flex gap-8">
          <NavLink to="/" end className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/recipes" className={navStyle}>
            Recipes
          </NavLink>

          <NavLink to="/categories" className={navStyle}>
            Categories
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

// Recipe Card
function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block bg-white p-7 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold mb-3 text-black">
        {recipe.title}
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        {recipe.description}
      </p>

      <span className="inline-block bg-pink-100 text-pink-700 px-3 py-2 rounded-md">
        {recipe.category}
      </span>
    </Link>
  );
}

// Home Page
function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-5">
          Welcome to Recipe Book
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          Discover delicious recipes for every occasion.
        </p>

        <div className=" flex justify-center gap-6 flex-wrap">
          <Link
            to="/recipes"
            className="bg-rose-500 p-8 rounded-xl shadow-md hover:shadow-lg"
          >
            <h2 className="  text-2xl font-bold mb-2">Browse Recipes</h2>
            <p className="text-white">Explore our collection of delicious recipes</p>
          </Link>

          <Link
            to="/categories"
            className="bg-rose-500 p-8 rounded-xl shadow-md hover:shadow-lg"
          >
            <h2 className=" text-2xl font-bold mb-2">Recipe Categories</h2>
            <p className="text-white">find recipes by category</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

// Recipes Page
function Recipes() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-7">All Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}

// Recipe Detail Page
function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-7">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <Link
          to="/recipes"
          className="text-pink-600 text-lg hover:underline"
        >
          ← Back to Recipes
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-8">
          {recipe.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-2xl font-bold mb-5">
              Ingredients
            </h2>

            <ul className="list-disc pl-7 space-y-3 text-lg">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">
              Instructions
            </h2>

            <ol className="list-decimal pl-7 space-y-3 text-lg">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}

// Categories Layout
function CategoryLayout() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-7">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        <aside className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-5">Category List</h2>

          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/categories/${category.id}`}
                className={({ isActive }) =>
                  `p-3 rounded-lg ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-pink-100"
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </aside>

        <section className="md:col-span-3">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

// Categories Home
function Categories() {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-3">
        Choose a Category
      </h2>

      <p className="text-gray-600">
        Select a category from the sidebar to view recipes.
      </p>
    </div>
  );
}

// Filter Category Recipes
function CategoryRecipes() {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) return <NotFound />;

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">
        {category.name}
      </h2>

      <p className="text-gray-600 mb-6">
        {category.description}
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          No recipes available in this category.
        </p>
      )}
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-7xl font-bold text-pink-600">404</h1>
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>

      <Link
        to="/"
        className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />

          <Route path="/categories" element={<CategoryLayout />}>
            <Route index element={<Categories />} />
            <Route path=":categoryId" element={<CategoryRecipes />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
