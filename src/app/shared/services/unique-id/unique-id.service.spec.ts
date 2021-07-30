import { UniqueIdService } from './unique-id.service';

// <alguma coisa> should <fazer algo> when <determinadas condições estiverem presentes>
// nome do metodo com #

describe(UniqueIdService.name, () => {
  let uniqueIdService: UniqueIdService = null;

  // chamado antes de cada it()
  beforeEach(() => {
    uniqueIdService = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
    const id = uniqueIdService.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  /*it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should not duplicate IDs when called multiple times`, () => {
    const uniqueIdService = new UniqueIdService();
    const id1 = uniqueIdService.generateUniqueIdWithPrefix('app');
    const id2 = uniqueIdService.generateUniqueIdWithPrefix('app');
    expect(id1).not.toBe(id2);
  });*/

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should not duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    const total = 100;

    for (let i = 0; i < total; i++) {
      const id = uniqueIdService.generateUniqueIdWithPrefix('app');
      ids.add(id);
    }

    expect(ids.size).toBe(total);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
  should return the number of generated ids when called`, () => {
    const ids = new Set();
    const total = 10;

    for (let i = 0; i < total; i++) {
      const id = uniqueIdService.generateUniqueIdWithPrefix('app');
      ids.add(id);
    }

    expect(uniqueIdService.getNumberOfGeneratedIds()).toBe(total);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw error when called with empty prefix`, () => {
    const emptyValues = [null, undefined, ''];

    emptyValues.forEach((value) => {
      expect(() => uniqueIdService.generateUniqueIdWithPrefix(value))
        .withContext(`## Empty value => ${value} ##`)
        .toThrowError();
    });
  });
});
