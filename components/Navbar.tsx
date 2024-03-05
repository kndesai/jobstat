import LinksDropdown from  '../components/LinksDropdown';
import {UserButton} from '@clerk/nextjs';
import ThemeToggle from '../components/ThemeToggle';

function Navbar() {
    return (
        <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
            <div>
                <LinksDropdown></LinksDropdown>
            </div>
            <div className='flex items-center gap-x-4'>
                <ThemeToggle></ThemeToggle>
                <UserButton afterSignOutUrl='/'></UserButton>
            </div>
        </nav>
    );
}

export default Navbar;