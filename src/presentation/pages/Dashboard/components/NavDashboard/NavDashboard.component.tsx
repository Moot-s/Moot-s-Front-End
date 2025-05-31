import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";

import { useAuth } from "../../../../../hooks/useAuth/useAuth";
import PlusIcon from "../../../../icons/PlusIcon/PlusIcon";
import ProfileIcon from "../../../../icons/ProfileIcon/ProfileIcon";

type Props = {
  onOpen: (open: boolean) => void;
};

export default function NavDashboard({ onOpen }: Props) {
  const { user, logout } = useAuth();
  return (
    <Navbar className="bg-white">
      <NavbarBrand>
        <img src="/img/logo.png" alt="Logo" className="h-8" />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 font-poppins	"
        justify="center"
      >
        <NavbarItem isActive>
          <Button
            className="bg-pink-400 rounded-md text-white"
            startContent={<PlusIcon />}
            onPress={() => onOpen(true)}
          >
            Add emotion
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex flex-row gap-2 cursor-pointer">
              <p className="text-gray-600">{user?.username}</p>
              <ProfileIcon className="fill-gray-600" />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="warning"
              href={import.meta.env.VITE_DASHBOARD_URL}
            >
              Admin panel
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onPress={() => {
                logout();
              }}
            >
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
