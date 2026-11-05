import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useParams,
  useLocation
} from "react-router-dom";



function Navbar({ isLoggedIn, logout }) {
  return (
    <nav className="navbar">
      <h3>React Blog</h3>

      <div className="nav-links">

        <Link to="/" className="nav-link">
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/create" className="btn">
              Create Post
            </Link>

            <button
              className="btn danger"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}



function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}



function Home({ posts }) {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const searchTerm = params.get("search") || "";

  const [search, setSearch] = useState(searchTerm);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearch(e) {
    e.preventDefault();

    navigate(
      search.trim()
        ? `/?search=${encodeURIComponent(search.trim())}`
        : "/"
    );
  }

  return (
    <div className="card">

      <h3>Blog Posts</h3>

      <form onSubmit={handleSearch}>

        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn search-btn">
          Search
        </button>

      </form>

      <div className="post-list">

        {filteredPosts.length > 0 ? (

          filteredPosts.map((post) => (

            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="post-link"
            >
              {post.title}
            </Link>

          ))

        ) : (

          <p>No posts found.</p>

        )}

      </div>

    </div>
  );
}

// ===================================
// LOGIN PAGE
// ===================================

function Login({ login }) {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  function handleLogin() {
    login();

    navigate(from, { replace: true });
  }

  return (
    <div className="card">

      <h3>Login</h3>

      <p>
        You must log in to access the Create Post page.
      </p>

      <button
        className="btn"
        onClick={handleLogin}
      >
        Log In
      </button>

    </div>
  );
}


function CreatePost({ addPost }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    addPost(title.trim(), content.trim());

    navigate("/", { replace: true });
  }

  return (
    <div className="card">

      <h3>Create Post</h3>

      <form onSubmit={handleSubmit}>

        <label>Post Title</label>

        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Post Content</label>

        <textarea
          placeholder="Write your post..."
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn search-btn"
        >
          Create Post
        </button>

      </form>

    </div>
  );
}



function PostDetail({ posts }) {
  const { postId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const index = posts.findIndex(
    (post) => post.id === Number(postId)
  );

  if (index === -1) {
    return (
      <div className="card">

        <h3>Post Not Found</h3>

        <Link to="/" className="btn">
          Go Home
        </Link>

      </div>
    );
  }

  const post = posts[index];

  function nextPost() {
    if (index < posts.length - 1) {

      navigate(`/posts/${posts[index + 1].id}`, {
        state: { previousPost: post.id }
      });

    }
  }

  function previousPost() {
    if (index > 0) {

      navigate(`/posts/${posts[index - 1].id}`, {
        state: { previousPost: post.id }
      });

    }
  }

  return (
    <div className="card">

      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <small>
        Previous Post ID: {location.state?.previousPost || "None"}
      </small>

      <div className="post-buttons">

        <button
          className="btn"
          onClick={previousPost}
          disabled={index === 0}
        >
          Previous
        </button>

        <button
          className="btn"
          onClick={nextPost}
          disabled={index === posts.length - 1}
        >
          Next
        </button>

      </div>

    </div>
  );
}



function NotFound() {
  return (
    <div className="card">

      <h2>404 - Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="btn">
        Go Home
      </Link>

    </div>
  );
}



function AppContent() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [posts, setPosts] = useState([

    {
      id: 1,
      title: "Introduction to React",
      content: "React is a JavaScript library used to build user interfaces."
    },

    {
      id: 2,
      title: "Understanding React Router",
      content: "React Router is used for navigation between pages."
    },

    {
      id: 3,
      title: "React Hooks in Depth",
      content: "React Hooks allow functional components to use React features."
    }

  ]);

  

  function login() {
    localStorage.setItem("loggedIn", "true");

    setIsLoggedIn(true);
  }

  

  function logout() {
    localStorage.removeItem("loggedIn");

    setIsLoggedIn(false);
  }

  

  function addPost(title, content) {

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts((prevPosts) => [
      ...prevPosts,
      newPost
    ]);

  }

  return (
    <>

      <Navbar
        isLoggedIn={isLoggedIn}
        logout={logout}
      />

      <div className="container">

        <Routes>

          

          <Route
            path="/"
            element={
              <Home posts={posts} />
            }
          />

          

          <Route
            path="/login"
            element={
              isLoggedIn
                ? <Navigate to="/" replace />
                : <Login login={login} />
            }
          />

         

          <Route
            path="/create"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CreatePost addPost={addPost} />
              </ProtectedRoute>
            }
          />

          

          <Route
            path="/posts/:postId"
            element={
              <PostDetail posts={posts} />
            }
          />

          

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

    </>
  );
}



export default function App() {

  return (
    <BrowserRouter>

      <AppContent />

    </BrowserRouter>
  );

}