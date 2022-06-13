import React from 'react';
import { useSelector } from 'react-redux';
import { RANK_KEY } from './constant';

export function useRank() { // It'd be better to provide an external API for developers to read the user rank directly
    const currentRank: number = useSelector(state => state[RANK_KEY]); // User's current rank based on the value in Redux

    return currentRank;
}