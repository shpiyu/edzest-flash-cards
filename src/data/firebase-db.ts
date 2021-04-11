import { firebase_db as db } from "../index";

export function getLevels(cb) {
    db.ref('/levels').once('value', snapshot => {
        cb(snapshot.val());
    });
}

export function getConceptsByLevel(levelName: string, cb) {
    // todo: get concepts by their
    const ref = db.ref('/concepts').orderByChild("level").equalTo(levelName);
    ref.once('value', snapshot => {
        var values: any[] = snapshot.val()
        if (typeof values == "object") {
            var obj = values
            values = []
            for (let idx in obj) {
                values.push(obj[idx]);
            }
        }
        values = values.map(value => {
            return { word: value.concept, meaning: value.meaning }
        });
        console.log(`Downloaded ${values.length} words from ${levelName} set.`);
        cb(values);
    });
}