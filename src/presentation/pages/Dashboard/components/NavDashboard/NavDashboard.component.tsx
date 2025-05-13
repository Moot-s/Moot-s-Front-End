import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@heroui/react";
import PlusIcon from "../../../../icons/PlusIcon/PlusIcon";
import { useAuth } from "../../../../../hooks/useAuth/useAuth";
import ProfileIcon from "../../../../icons/ProfileIcon/ProfileIcon";

type Props = {
  onOpen: (open: boolean) => void;
}

export default function NavDashboard({ onOpen }: Props) {

  const { user } = useAuth()
  return (
    <Navbar>
      <NavbarBrand>
        <img src="/img/logo.png" alt="Logo" className="h-8" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 font-poppins	" justify="center">
        <NavbarItem isActive>
          <Button className="bg-pink-400 rounded-md text-white" startContent={<PlusIcon />} onPress={() => onOpen(true)}>Add emotion</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex flex-row gap-2 cursor-pointer">
              <p className="text-gray-600 capitalize">{user?.username}</p>
              <ProfileIcon className="fill-gray-600"/>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}