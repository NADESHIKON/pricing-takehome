import { useRouter } from 'next/router';
import { has } from 'library';
import { Ranks } from '../lib/ranks';

// Test 1 - People without HERO rank or above will be redirected to the home page
export default function GatedAccess() {
    const router = useRouter();

    if (!has(Ranks.HERO)) {
        router.push("/");
        return null;
    }

    return <p>This place is only accessible to peoplew with HERO rank or above :)</p>
}