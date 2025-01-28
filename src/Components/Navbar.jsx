import ThemeChangeBtn from "./ThemeChangeBtn";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useSession } from "./Context/session/use-session";
import { useEffect, useState } from "react";

const DesktopNavbar = () => {
  const { session } = useSession();

  return (
    <nav className="navbar">
      <div className="gap-3">
        <div className="circle">
          <Link href="/">Home</Link>
        </div>

        <Link href="/">Streams</Link>
        <Link href="/">Party</Link>
        <Link href="/">Premium</Link>
      </div>
      <div>
        <Header title={"Gamor"}></Header>
      </div>
      <div className="gap-3">
        {session === null ? (
          <div className="gap-3">
            <Link to="/login">Sign in</Link>
            <Link href="/" className="btn-variant-rounded rounded border-thic">
              Create account
            </Link>
          </div>
        ) : (
          <div className="gap-4">
            <h4 style={{ color: "hsl(var(--foreground))" }}>
              {session.user.username}
            </h4>
            <div className="profile-pic-container">
              <img
                src={session.user.profile_pic}
                alt="profile_pic"
                width={32}
                height={32}
              />
            </div>
          </div>
        )}
        <ThemeChangeBtn />
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const { session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile-header">
        <Header title={"Gamor"}></Header>

        <div>
          {session === null ? null : (
            <div className="gap-4">
              <h4 style={{ color: "hsl(var(--foreground))" }}>
                {session.user.username}
              </h4>
              <div className="profile-pic-container">
                <img
                  src={session.user.profile_pic}
                  alt="profile_pic"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          )}
          <ThemeChangeBtn />
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Steams</Link>
        </li>
        <li>
          <Link to="/">Party</Link>
        </li>
        <li>
          <Link to="/">Premium</Link>
        </li>

        {session === null ? (
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        ) : null}
        {session === null ? (
          <li>
            <Link href="/" className="btn-variant-outline rounded border-thic">
              Create account
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export const Navbar = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize[0] > 800 ? <DesktopNavbar /> : <MobileNavbar />;
};
