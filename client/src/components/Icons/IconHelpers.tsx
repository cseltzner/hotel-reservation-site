import KingBed from "./KingBed.tsx";
import Dumbbell from "./Dumbbell.tsx";
import SwimmingPool from "./SwimmingPool.tsx";
import Plane from "./Plane.tsx";
import Fridge from "./Fridge.tsx";
import Breakfast from "./Breakfast.tsx";
import Towel from "./Towel.tsx";
import Coffee from "./Coffee.tsx";
import Gift from "./Gift.tsx";
import Wine from "./Wine.tsx";
import Sea from "./Sea.tsx";

export const getFeatureIcon = (featureId: number, className?: string) => {
    let featureIcon = <></>
    switch (featureId) {
        case 1:
            featureIcon = <KingBed className={className}/>;
            break;
        case 2:
            featureIcon = <KingBed className={className}/>;
            break;
        case 3:
            featureIcon = <Dumbbell className={className}/>;
            break;
        case 4:
            featureIcon = <SwimmingPool className={className}/>;
            break;
        case 5:
            featureIcon = <Plane className={className}/>;
            break;
        case 6:
            featureIcon = <Fridge className={className}/>;
            break;
        case 7:
            featureIcon = <Breakfast className={className}/>;
            break;
        case 8:
            featureIcon = <Towel className={className}/>;
            break;
        case 9:
            featureIcon = <Coffee className={className}/>;
            break;
        case 10:
            featureIcon = <Gift className={className}/>;
            break;
        case 11:
            featureIcon = <Wine className={className}/>;
            break;
        case 12:
            featureIcon = <Sea className={className}/>;
            break;
        default:
            // Do nothing
    }

    return featureIcon;
}