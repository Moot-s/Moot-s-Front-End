import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";

export default function NavBarComponent() {
  return (
    <div className="font-wobble tracking-widest rounded-lg bg-white shadow-lg">
      <Navbar>
        <NavbarBrand>
          <img src="/img/logo.png" alt="Logo" className="h-8" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#" className="!text-yellow-400">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#" className="!text-yellow-400">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="!text-yellow-400">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="!text-orange-400">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              variant="flat"
              className="!text-orange-400"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
