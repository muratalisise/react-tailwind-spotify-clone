import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Auth = () => {
	const user = {
		name: "Murat Ali ŞİŞE"
	};
	
	return (
		<div>
			<Menu as="nav" className={"relative"}>
				<MenuButton className="flex items-center gap-x-2">
					<FontAwesomeIcon icon={faUser} />
					<span>{user.name}</span>
				</MenuButton>
				<MenuItems anchor="bottom" className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
					<MenuItem>
						<a className="block data-[focus]:bg-blue-100" href="/settings">
							Account
						</a>
					</MenuItem>
					<MenuItem>
						<a className="block data-[focus]:bg-blue-100" href="/support">
							Profile
						</a>
					</MenuItem>
					<MenuItem>
						<a className="block data-[focus]:bg-blue-100" href="/license">
							Log out
						</a>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
};

export default Auth;
