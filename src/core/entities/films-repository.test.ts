test('get All films', () => {
    const repo = new FilmsRepository();
    const films = await repo.getAll();
    expect(films).toBeInstanceOf(Array);
});
