
import { Ranks } from '../lib/ranks';
import Accessible from '@nadeshikon/accessibility/accessible';

// Test 1: This page is only open to
export default function RankOnly() {
    return <Accessible minimumRank={Ranks.VIP} denialElement={<p>404 Not Found</p>}>
        <p>Well, this place actually does exist, you just need a rank to see it XD</p>
    </Accessible>
}