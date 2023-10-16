export const Rating = ({ rating }) => {
  return (
    <div className="flex flex-row">
      <label
        className={`${rating >= 1 ? "text-orange-400" : "text-gray-500"}
        text-3xl`}
        htmlFor="radio1"
        id="1"
      >
        ★
      </label>

      <label
        className={`${rating >= 2 ? "text-orange-400" : "text-gray-500"}
         text-3xl `}
        htmlFor="radio2"
        id="2"
      >
        ★
      </label>

      <label
        className={`${rating >= 3 ? "text-orange-400" : "text-gray-500"}
        text-3xl `}
        htmlFor="radio3"
        id="3"
      >
        ★
      </label>

      <label
        className={`${rating >= 4 ? "text-orange-400" : "text-gray-500"}
        text-3xl `}
        htmlFor="radio4"
        id="4"
      >
        ★
      </label>

      <label
        className={`${rating >= 5 ? "text-orange-400" : "text-gray-500"}
         text-3xl `}
        htmlFor="radio5"
        id="5"
      >
        ★
      </label>
    </div>
  );
};

export default Rating;
