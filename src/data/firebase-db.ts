import { firebase_db as db } from "../index";

export function getLevels(cb) {
    db.ref('/levels').once('value', snapshot => {
        cb(snapshot.val());
    });
}

export function getConceptsByLevel(levelName: string, cb) {
    // todo: get concepts by their
    const ref = db.ref('/concepts').limitToFirst(10);
    ref.once('value', snapshot => {
        var values: any[] = snapshot.val()
        values = values.map(value => {
            return { word: value.concept, meaning: value.meaning }
        });
        cb(values);
    });
}