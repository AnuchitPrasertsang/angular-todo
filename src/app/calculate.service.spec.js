import angular from 'angular';

describe('Calculate Service', () => {
    beforeEach(angular.mock.module('app'));

    let Calculate;
    beforeEach(inject((_Calculate_) => {
        Calculate = _Calculate_;
    }));
    
    it('add 1 and 4 should be 5', () => {
        let result = Calculate.add(1, 4);

        expect(result).toEqual(5);
    });

    it('add -2 and 3 should be 1', () => {
        let result = Calculate.add(-2, 3);

        expect(result).toEqual(1);
    });
});