describe("Hero Service", () => {
    beforeEach(angular.mock.module('app'));
    let HeroService;

    beforeEach(inject((_HeroService_) => {
        HeroService = _HeroService_;
    }));

    it("when call `getHeroesSync` should be return list of heroes", inject(() => {
        let expected = [{
            id: 1,
            name: "nong"
        }, {
            id: 2,
            name: "RUX"
        }];

        let heroes = HeroService.getHeroesSync();

        expect(heroes).toEqual(expected);
    }));

    it('call `getHeroes` should be call http with correct endpoint', inject(($http) => {
        spyOn($http, 'get').and.callThrough();

        HeroService.getHeroes();

        expect($http.get).toHaveBeenCalledWith('http://10.0.1.4:3000/heroes');
    }));

    it('call `getHeroes` should be return list of heroes', inject(($rootScope, $httpBackend) => {
        $httpBackend.expectGET('http://10.0.1.4:3000/heroes').respond(200, [{id: 1, name: 'nong'}]);

        let promise = HeroService.getHeroes();
        $httpBackend.flush();

        promise.then((heroes) => {
            expect(heroes).toEqual([{
                id: 1,
                name: 'nong'
            }]);
        });

        $rootScope.$digest();
    }));
});