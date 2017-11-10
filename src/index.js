import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const data = [
    {
        "author": {
            "id": 5,
            "name": "Grigory R"
        },
        "comments": [
            {
                "commenter": {
                    "id": 1,
                    "name": "Arnold Sh"
                },
                "id": 1,
                "text": "Unfortunately, many of today`s performance reviews aren`t anywhere as effective as they could be. In fact, Fast Company reports that 74% of younger workers leave reviews unsure about what their managers actually think of their performance."
            },
            {
                "commenter": {
                    "id": 5,
                    "name": "Grigory R"
                },
                "id": 3,
                "text": "Slimy mackerel char; three-toothed puffer pilchard; splitfin hawkfish butterfly ray Australasian salmon. Mouthbrooder morid cod redmouth whalefish boxfish trout-perch; channel catfish, lemon sole, sailback scorpionfish saury ghost carp whale shark."
            },
            {
                "commenter": {
                    "id": 4,
                    "name": "Sushma Swaraj"
                },
                "id": 7,
                "text": "North American freshwater catfish, river stingray, firefish opaleye alooh spookfish Blenny velvet-belly shark, arapaima.\" Shiner sandroller, guppy telescopefish deep sea bonefish, \"loach forehead brooder river loach swamp-eel handfish triplespine, scat sole eelblenny sawfish kuhli loach koi, olive flounder, Old World rivuline.\" Gizzard shad. Amago grayling tench ronquil Rattail lampfish sawtooth eel loweye catfish neon tetra."
            }
        ],
        "id": 1,
        "text": "Article 1. Unfortunately, many effective as they could be. In fact, Fast Company reports that 74% of younger workers leave reviews unsure about what their managers actually think of their performance.",
        "title": "Article 1"
    },
    {
        "author": {
            "id": 2,
            "name": "Harsimrat Kaur Badal"
        },
        "comments": [
            {
                "commenter": {
                    "id": 2,
                    "name": "Harsimrat Kaur Badal"
                },
                "id": 2,
                "text": "Catalufa eelpout. Gulper eel collared carpetshark electric ray bream yellowtail bigeye squaretail zebra oto skipjack tuna bull shark. Guitarfish gulf menhaden golden trout amur pike sauger Bombay duck, angelfish, sandburrower; buffalofish channel catfish panga pikeperch knifejaw Antarctic icefish? Cutthroat trout telescopefish roosterfish pejerrey eulachon alooh sea bream. North American darter Kafue pike velvet catfish soldierfish northern anchovy trench threadfin bream New World rivuline rockling antenna codlet.\" Trevally barbeled houndshark grunion tubeblenny sleeper shark madtom walking catfish merluccid hake."
            },
            {
                "commenter": {
                    "id": 3,
                    "name": "Dharmendra Pradhan"
                },
                "id": 4,
                "text": "Snake mudhead bat ray canary rockfish Billfish lighthousefish; sweeper angelfish trout cod huchen eel ribbonbearer. Yellowtail, spotted danio sockeye salmon morid cod, \"hog sucker, sturgeon.\" Ragfish Black sea bass swordtail ridgehead; orbicular velvetfish creek chub emperor bream garibaldi hussar scorpionfish. Crocodile icefish loach minnow popeye catafula dory eagle ray rough scad herring glassfish, butterfly ray. Duckbill eel; grass carp. Barbel razorfish pirate perch sand stargazer priapumfish largemouth bass mummichog California halibut squawfish hake smalleye squaretail velvet catfish."
            }
        ],
        "id": 2,
        "text": "Article 2. Gulper eel collared carpetshark electric ray bream yellowtail bigeye squaretail zebra oto skipjack tuna bull shark. Guitarfish gulf menhaden golden trout amur pike sauger Bombay duck, angelfish, sandburrower; buffalofish channel catfish panga pikeperch knifejaw Antarctic icefish? Cutthroat trout telescopefish roosterfish pejerrey eulachon alooh sea bream. North American darter Kafue pike velvet catfish soldierfish northern anchovy trench threadfin bream New World rivuline rockling antenna codlet.\" Trevally barbeled houndshark grunion tubeblenny sleeper shark madtom walking catfish merluccid hake.",
        "title": "Article 2"
    },
    {
        "author": {
            "id": 1,
            "name": "Arnold Sh"
        },
        "comments": [
            {
                "commenter": {
                    "id": 4,
                    "name": "Sushma Swaraj"
                },
                "id": 5,
                "text": "Dolly Varden trout loach minnow marlin lemon shark scaly dragonfish spadefish stoneroller minnow. Longnose sucker, archerfish flying gurnard. Black swallower electric knifefish orangespine unicorn fish slimy mackerel redmouth whalefish topminnow velvetfish, tripod fish dusky grouper yellowtail clownfish orangespine unicorn fish. Tadpole cod sablefish common tunny: footballfish desert pupfish glass catfish butterfly ray pirate perch. Bramble shark beaked salmon, summer flounder pearlfish opaleye flashlight fish galjoen fish haddock California flyingfish smelt huchen, leopard danio"
            },
            {
                "commenter": {
                    "id": 3,
                    "name": "Dharmendra Pradhan"
                },
                "id": 6,
                "text": "Mozambique tilapia yellowtail kingfish knifejaw boga threadfin bream sea lamprey hussar snook yellowfin grouper, scup, black dragonfish. Bocaccio swamp-eel suckermouth armored catfish common tunny lungfish New Zealand sand diver. Ground shark clownfish stingfish barbelless catfish? Wrymouth threadfin California smoothtongue New World rivuline wels catfish torrent fish wallago. Silverside tarpon; Pacific trout fingerfish opah sunfish African lungfish, \"Japanese eel,\" scup seamoth South American darter? North American freshwater catfish. Sand knifefish northern sea robin, porbeagle shark squeaker, jackfish luminous hake arowana threespine stickleback sand dab? Herring smelt barred danio oldwife, lightfish armorhead, \"lancetfish, pencilsmelt.\" Opaleye hamlet menhaden medaka cavefish grunt sculpin beaked sandfish leopard danio deep sea anglerfish? Beardfish surf sardine wrasse spearfish requiem shark minnow nibbler, cusk-eel bristlenose catfish gulper; pollyfish pineconef"
            }
        ],
        "id": 3,
        "text": "Article 3. Slimy mackerel char; three-toothed puffer pilchard; splitfin hawkfish butterfly ray Australasian salmon. Mouthbrooder morid cod redmouth whalefish boxfish trout-perch; channel catfish, lemon sole, sailback scorpionfish saury ghost carp whale shark.",
        "title": "Article 3"
    }
];

const app = document.getElementById('app');
ReactDOM.render(<App data={data} />, app);
