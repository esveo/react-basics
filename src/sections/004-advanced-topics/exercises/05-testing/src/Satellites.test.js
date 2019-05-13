import { satelliteReducer } from './Satellites';

describe('Satellites', () => {
  describe('satelliteReducer', () => {
    it('should throw on unknown action type.', () => {
      // arrange
      const initialState = [];
      const action = { type: 'NOT_A_KNOWN_ACTION_TYPE' };

      // act + assert
      expect(() => satelliteReducer(initialState, action)).toThrowError();
    });

    it('should set the loaded satellites without mutating the state', () => {
      // arrange
      const initialState = [];
      const action = { type: 'SATELLITES_LOADED', satellites: [1, 2, 3] };
      const expectedState = action.satellites;

      // act
      const actualState = satelliteReducer(initialState, action);

      // assert
      expect(actualState).toEqual(expectedState);
      expect(actualState).not.toBe(initialState);
      expect(initialState).toHaveLength(0);
    });

    it('should add the created satellite immutably while keeping old satellites', () => {
      // arrange
      const initialState = [1, 2];
      const action = { type: 'SATELLITE_CREATED', satellite: 3 };
      const expectedState = [1, 2, 3];

      // act
      const actualState = satelliteReducer(initialState, action);

      // assert
      expect(actualState).toEqual(expectedState);
      expect(actualState).not.toBe(initialState);
      expect(initialState).toHaveLength(2);
    });

    it('should update satellite immutably while keeping old satellites', () => {
      // arrange
      const initialState = [
        { id: 1, value: 'hello' },
        { id: 2, value: 'world' }
      ];
      const action = {
        type: 'SATELLITE_UPDATED',
        satellite: { id: 1, value: 'good bye' }
      };
      const expectedState = [
        { id: 1, value: 'good bye' },
        { id: 2, value: 'world' }
      ];

      // act
      const actualState = satelliteReducer(initialState, action);

      // assert
      expect(actualState).toEqual(expectedState);
      expect(actualState).not.toBe(initialState);
      expect(initialState).toHaveLength(2);
      expect(actualState[1]).toBe(initialState[1]);
    });

    it('should delete satellite', () => {
      // arrange
      const initialState = [
        { id: 1, value: 'hello' },
        { id: 2, value: 'world' }
      ];
      const action = {
        type: 'SATELLITE_DELETED',
        satellite: { id: 1 }
      };
      const expectedState = [{ id: 2, value: 'world' }];

      // act
      const actualState = satelliteReducer(initialState, action);

      // assert
      expect(actualState).toEqual(expectedState);
      expect(actualState).not.toBe(initialState);
      expect(initialState).toHaveLength(2);
      expect(actualState[0]).toBe(initialState[1]);
    });
  });
});
