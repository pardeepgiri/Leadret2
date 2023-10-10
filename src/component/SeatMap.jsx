import React, { useEffect, useState } from 'react';
import {MdOutlineChair,MdChair} from "react-icons/md"


const SeatMap = ({seattype}) => {

  console.log(seattype)
  const rowname = ['Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'E']
  const [layout, setlayout] = useState(
    [
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        {

          position: 4,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        { position: 6, status: "empty" },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 9, status: "empty" },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        { position: 12, status: "empty" },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        { position: 15, status: "empty" },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 18, status: "empty" },

        {

          position: 19,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        { position: 21, status: "empty" },

        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        { position: 24, status: "empty" },

        { position: 25, status: "empty" },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        {

          position: 4,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        { position: 6, status: "empty" },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 9, status: "empty" },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        { position: 12, status: "empty" },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        { position: 15, status: "empty" },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 18, status: "empty" },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
         {
          position:22,status:"empty"
         },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 25, status: "empty" },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 3, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 18,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "premium",

        },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 3, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 18,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "premium",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "premium",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "premium",

        },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 4, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "standard",
        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 18,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "standard",

        },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 4, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "standard",
        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 18,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "standard",

        },

      ],
      [
        {

          position: 1,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 2,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 3,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
  
          { position: 4, status: "empty" },
          {
  
            position: 5,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 6,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 7,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 8,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 9,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
          },
  
          {
  
            position: 10,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 11,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 12,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 13,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 14,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 15,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 16,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 17,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 18,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          { position: 19, status: "empty" },
  
          {
  
            position: 20,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 21,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 22,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 23,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 24,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 25,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
        ],
      [
        {

          position: 1,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 2,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
        {

          position: 3,

          status: "unavailable",

          isSelected: false,

          type: "premium",

        },
          { position: 4, status: "empty" },
          {
  
            position: 5,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 6,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 7,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 8,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 9,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
          },
  
          {
  
            position: 10,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 11,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 12,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 13,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 14,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 15,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 16,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 17,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 18,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          { position: 19, status: "empty" },
  
          {
  
            position: 20,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 21,
  
            status: "unavailable",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 22,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
          {
  
            position: 23,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 24,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
          {
  
            position: 25,
  
            status: "available",
  
            isSelected: false,
  
            type: "standard",
  
          },
  
        ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 4, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "standard",
        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 18,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "standard",

        },

      ],
      [
        { position: 1, status: "empty" },
        { position: 2, status: "empty" },
        { position: 3, status: "empty" },
        { position: 4, status: "empty" },
        {

          position: 5,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 6,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 7,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 8,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 9,

          status: "available",

          isSelected: false,

          type: "standard",
        },

        {

          position: 10,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 11,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 12,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 13,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 14,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 15,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 16,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 17,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 18,

          status: "availablee",

          isSelected: false,

          type: "standard",

        },

        { position: 19, status: "empty" },

        {

          position: 20,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },

        {

          position: 21,

          status: "unavailable",

          isSelected: false,

          type: "standard",

        },
        {

          position: 22,

          status: "available",

          isSelected: false,

          type: "standard",

        },
        {

          position: 23,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 24,

          status: "available",

          isSelected: false,

          type: "standard",

        },

        {

          position: 25,

          status: "available",

          isSelected: false,

          type: "standard",

        },

      ],
      
    ]
);
  
useEffect(() => {

  const isPremiumAvailable = seattype === 'standard';

  const updatedLayout = layout.map((row) =>
    row.map((seat) => {
      if (seat.status === 'empty') {
        return seat;
      } else if (seat.type === 'standard' && isPremiumAvailable) {
      
        return { ...seat, status: 'available' };
      } else if (seat.type === 'premium' &&  !isPremiumAvailable) {
        
        return { ...seat, status: 'available' };
      } else {
   
        return { ...seat, status: 'unavailable' };
      }
    })
  );

  setlayout(updatedLayout);
}, [seattype]);




  return (
    <div className='seatmap'>
      {
        layout.map((seat, rowindex) => {
          return (
            <div key={rowindex} style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "25px", marginTop: "15px",height:"30px" }}>
                {rowname[rowindex]}

              </div>
              {
                seat.map((item, index2) => {
                  return (
                    <div key={index2}
                       
                    >{
                      item.status === "empty" ? (
                        <span style={{ marginRight: "35px" }}></span>
                      ) : (
                        item.status === "available" ? (
                          <MdOutlineChair
                          style={{ width: "35px", marginTop: "15px",height:"30px"}}
                          />
                        ) : (
                          <MdChair
                          style={{ width: "35px", marginTop: "15px",height:"30px" }}
                          />
                        )
                      )
                    }</div>
                  )
                })
              }
            </div>
          )
        })
      }
      <button className='btn'>Proceed</button>
    </div>
  )
}

export default SeatMap
