import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between w-full h-[80px] p-4 bg-primarydarkgrey ">
        <div className="ml-6">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={"150px"} height={"150px"} />
          </Link>
        </div>
        <div className="m-0">
          <ul className="hidden md:flex gap-5 text-silver font-semibold justify-center items-center mt-2">
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
            <Link to='/dashboard'>My Profile</Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="mr-6 flex gap-5">
          <Link to={"/auth"}>
            <Button
              variant={"login"}
              className="hidden md:block text-md fonbt-semibold"
            >
              Sign in
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="md:hidden" variant={"secondary"} size={"icon"}>
                <FiMenu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={"/services"}>Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/appointments">Appointments</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard">My Profile</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/auth"}>
                  <Button variant={"login"} className="text-md fonbt-semibold">
                    Sign in
                  </Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Header;
