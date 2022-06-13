import Accessible from '@nadeshikon/accessibility/accessible';
import { Ranks } from '../lib/ranks';
import { change, demote, has, promote } from '@nadeshikon/accessibility';
import { useRank } from '@nadeshikon/accessibility/hook';

// There are multiple tests here
// Test 1: User needs at least `VIP` rank to see a certain text, otherwise text does not show up
// Test 2: User needs at least `VIP+` rank to see a certain text, otherwise he/she will see another text
// Test 3: If user has the maximum rank defined by the website application, then he/she will not be able to upgrade by clicking the button
// Test 4: If the user has the minimum rank defined by the website application (0), then he/she will not be able to degrade by clicking the button
// Test 5: User is able to switch himself/herself to a specific rank of his/her own choice
// Test 6: CHAMPION ranks will have a slightly blue background
export default function Page() {
    const rank = useRank();

    return (
        <div className={`container mx-auto font-mono p-2 ${has(Ranks.CHAMPION) ? "bg-blue-50" : ""}`}>
            <h1 className="text-center text-2xl">Hello World</h1>
            <Accessible minimumRank={Ranks.VIP}>
                <p>You are supposed to have at least VIP to see this my boi</p>
            </Accessible>
            <Accessible minimumRank={Ranks.VIP_PLUS} denialElement={<p>君のせい</p>}>
                <p>The text here was &#34;It is your fault&#34; in Japanese, anyone without VIP+ or above will see the Japanese version instead.</p>
            </Accessible>
            <div className="border-2 cursor-pointer p-2" onClick={() => {
                if (!has(Ranks.CHAMPION)) promote();
            }}>
                Click here to promote you to a higher rank
            </div>
            <div className="border-2 cursor-pointer p-2" onClick={() => {
                if (rank > 0) demote();
            }}>
                Click here to demote you to a lower rank
            </div>

            <p className="my-3">Click any of the blocks below to switch yourself to a specific rank</p>
            <div className="grid grid-cols-4">
                {Object.keys(Ranks).filter(k => isNaN(Number(k))).map(mappedRank => {
                    return (
                        // @ts-ignore
                        // Have to ignore this, TypeScript apparently does not like Enum indexing with string? Even I typecast it still gets angry
                        <div className="p-2 border-2 text-center cursor-pointer" key={mappedRank} onClick={() => change(Ranks[mappedRank])}>
                            {mappedRank}
                        </div>
                    )
                })}
            </div>

            <p>Your current rank: {Ranks[rank]}</p>
        </div>
    );
}
