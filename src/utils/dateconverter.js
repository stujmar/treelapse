export const dateConverter = (number) => {
    
    let dayLibrary = {
        1: "Happy New Year!",
        2: "January 2nd",
        3: "January 3rd",
        4: "January 4th",
        5: "January 5th",
        6: "January 6th",
        7: "January 7th",
        8: "January 8th",
        9: "January 9th",
        10: "January 10th",
        11: "January 11th",
        12: "January 12th",
        13: "January 13th",
        14: "January 14th",
        15: "January 15th",
        16: "January 16th",
        17: "January 17th",
        18: "January 18th",
        19: "January 19th",
        20: "January 20th",
        21: "January 21th",
        22: "Janaury 22nd",
        23: "January 23th",
        24: "January 24th",
        25: "January 25th",
        26: "January 26th",
        27: "January 27th",
        28: "January 28th",
        29: "January 29th",
        30: "January 30th",
        31: "January 31st",
        32: "February 1st",
        33: "February 2nd",
        34: "February 3rd",
        35: "February 4th",
        36: "February",
        37: "February",
        38: "February",
        39: "February",
        40: "February",
        41: "February",
        42: "February",
        43: "February",
        44: "February",
        45: "February",
        46: "February",
        47: "February",
        48: "February",
        49: "February",
        50: "February",
        51: "February",
        52: "February",
        53: "February",
        54: "February",
        55: "February",
        56: "February",
        57: "February",
        58: "February",
        59: "February",
        60: "",
        61: "",
        62: "",
        63: "",
        64: "",
        65: "",
        66: "",
        67: "",
        68: "",
        69: "",
        70: "",
        71: "",
        72: "",
        73: "",
        74: "",
        75: "",
        76: "",
        77: "",
        78: "",
        79: "",
        80: "",
        81: "",
        82: "",
        83: "",
        84: "",
        85: "",
        86: "",
        87: "",
        88: "",
        89: "",
        90: "",
        100: "",
        101: "",
        102: "",
        103: "",
        104: "",
        105: "",
        106: "",
        107: "",
        108: "",
        109: "",
        110: "",
        111: "",
        112: "",
        113: "",
        114: "",
        115: "",
        116: "",
        117: "",
        118: "",
        119: "",
        120: "",
        121: "",
        122: "",
        123: "",
        124: "",
        125: "",
        126: "",
        127: "",
        128: "",
        129: "",
        130: "",
        131: "",
        132: "",
        133: "",
        134: "",
        135: "",
        136: "",
        137: "",
        138: "",
        139: "",
        140: "",
        141: "",
        142: "",
        143: "",
        144: "",
        145: "",
        146: "",
        147: "",
        148: "",
        149: "",
        150: "",
        151: "",
        152: "",
        153: "",
        154: "",
        155: "",
        156: "",
        157: "",
        158: "",
        159: "",
        160: "",
        161: "",
        162: "",
        163: "",
        164: "",
        165: "",
        166: "",
        167: "",
        168: "",
        168: "",
        169: "",
        170: "",
        171: "",
        172: "",
        173: "",
        174: "",
        175: "",
        176: "",
        177: "",
        178: "",
        179: "",
        180: "",
        181: "",
        182: "",
        183: "",
        184: "",
        185: "",
        186: "",
        187: "",
        188: "",
        189: "",
        190: "",
        191: "",
        192: "",
        193: "",
        194: "",
        195: "",
        196: "",
        197: "",
        198: "",
        199: "",
        200: "",
        201: "",
        202: "",
        203: "",
        204: "",
        205: "",
        206: "",
        207: "",
        208: "",
        209: "",
        210: "",
        211: "",
        212: "",
        213: "",
        214: "",
        215: "",
        216: "",
        217: "",
        218: "",
        219: "",
        220: "",
        221: "",
        222: "",
        223: "",
        224: "",
        225: "",
        226: "",
        227: "",
        228: "",
        229: "",
        230: "",
        231: "",
        232: "",
        233: "",
        234: "",
        235: "",
        236: "",
        237: "",
        238: "",
        239: "",
        240: "",
        241: "",
        242: "",
        243: "",
        244: "",
        245: "",
        246: "",
        247: "",
        248: "",
        249: "",
        250: "",
        251: "",
        252: "",
        253: "",
        254: "",
        255: "",
        256: "",
        257: "",
        258: "",
        259: "",
        260: "",
        261: "",
        262: "",
        263: "",
        264: "",
        265: "",
        266: "",
        267: "",
        268: "",
        269: "",
        270: "",
        271: "",
        272: "",
        273: "",
        274: "",
        275: "",
        276: "",
        277: "",
        278: "",
        279: "",
        280: "",
        281: "",
        282: "",
        283: "",
        283: "",
        284: "",
        285: "",
        286: "",
        287: "",
        288: "",
        289: "",
        290: "",
        291: "",
        292: "",
        293: "",
        294: "",
        295: "",
        296: "",
        297: "",
        298: "",
        299: "",
        300: "",
        301: "",
        302: "",
        303: "",
        304: "",
        305: "",
        306: "",
        307: "",
        308: "",
        309: "",
        310: "",
        311: "",
        312: "",
        313: "",
        314: "",
        315: "",
        316: "",
        317: "",
        318: "",
        319: "",
        320: "",
        321: "",
        322: "",
        323: "",
        324: "",
        325: "",
        326: "",
        327: "",
        328: "",
        329: "",
        330: "",
        331: "",
        332: "",
        333: "",
        334: "",
        335: "",
        336: "",
        337: "",
        338: "",
        339: "",
        340: "",
        431: "",
        342: "",
        343: "",
        344: "",
        345: "",
        346: "",
        347: "",
        348: "",
        349: "",
        350: "",
        351: "",
        352: "",
        353: "",
        354: "",
        355: "",
        356: "",
        357: "",
        358: "",
        359: "",
        360: "",
        361: "December 27th",
        362: "December 28th",
        363: "December 29th",
        364: "December 30th",
        365: "New Year's Eve!"
    }
    
    return dayLibrary[number]
}

