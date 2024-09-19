const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index');

describe('Band, Musician, and Song Models', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); // Sync the database
    });

    test('can create a Band', async () => {
        const band = await Band.create({ name: 'The Rolling Stones', genre: 'Rock' });
        expect(band.name).toBe('The Rolling Stones');
        expect(band.genre).toBe('Rock');
    });

    test('can create a Musician', async () => {
        const musician = await Musician.create({ name: 'Mick Jagger', instrument: 'Vocals' });
        expect(musician.name).toBe('Mick Jagger');
        expect(musician.instrument).toBe('Vocals');
    });

    test('can create a Song', async () => {
        const song = await Song.create({ title: 'Paint It Black', year: 1966 });
        expect(song.title).toBe('Paint It Black');
        expect(song.year).toBe(1966);
    });

    test('can update a Band', async () => {
        const band = await Band.create({ name: 'The Beatles', genre: 'Pop' });
        await band.update({ genre: 'Rock' });
        expect(band.genre).toBe('Rock');
    });

    test('can update a Musician', async () => {
        const musician = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass' });
        await musician.update({ instrument: 'Guitar' });
        expect(musician.instrument).toBe('Guitar');
    });

    test('can update a Song', async () => {
        const song = await Song.create({ title: 'Hey Jude', year: 1968 });
        await song.update({ year: 1970 });
        expect(song.year).toBe(1970);
    });

    test('can delete a Band', async () => {
        const band = await Band.create({ name: 'Queen', genre: 'Rock' });
        await band.destroy();
        const foundBand = await Band.findByPk(band.id);
        expect(foundBand).toBeNull();
    });

    test('can delete a Musician', async () => {
        const musician = await Musician.create({ name: 'Freddie Mercury', instrument: 'Vocals' });
        await musician.destroy();
        const foundMusician = await Musician.findByPk(musician.id);
        expect(foundMusician).toBeNull();
    });

    test('can delete a Song', async () => {
        const song = await Song.create({ title: 'Bohemian Rhapsody', year: 1975 });
        await song.destroy();
        const foundSong = await Song.findByPk(song.id);
        expect(foundSong).toBeNull();
    });
});
