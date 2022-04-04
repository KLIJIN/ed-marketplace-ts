import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "../../assets/Star.svg";

export const Rating: React.FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}) => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    setRatingFunc(rating);
  }, [rating]);

  const changeRating = (value: number): void => {
    if (isEditable) {
      setRatingFunc(value);
    }
  };

  const clickHandler = (value: number): void => {
    if (isEditable) {
      setRating(value);
    }
  };

  const setRatingFunc = (currRating: number) => {
    const newArr = ratingArr.map((element: JSX.Element, index: number) => {
      return (
        <StarIcon
          className={classNames({
            [styles.filled]: index < currRating,
          })}
          onMouseEnter={() => changeRating(index + 1)}
          onMouseLeave={() => changeRating(rating)}
          onClick={() => clickHandler(index + 1)}
        />
      );
    });
    setRatingArr(newArr);
  };

  return (
    <div {...props}>
      {ratingArr.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
