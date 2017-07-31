import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it("providing no value returns fallback", () => {
    expect(pipe.transform("", "http://placehold.it/300"))
      .toBe("http://placehold.it/300");
  });

  it("replaces http with https if https is enforced", () => {
    expect(pipe.transform("http://hello.world", "", true))
      .toBe("https://hello.world");
  });
});
