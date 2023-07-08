

// const Category = () => {
//     const isCategorySelected = selectedCategory === name;
  
//     return (
//       <div
//         className={`${styles.categoryItem} ${isCategorySelected ? styles.active : ''}`}
//         onClick={() => handleCategoryClick(name)}
//       >
//         <p>{name}</p>
//         {isCategorySelected && (
//           <div className={styles.occupationsContainer}>
//             {occupations.map((occupation) => (
//               <div key={occupation} className={styles.occupationCard}>
//                 {occupation}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default Category;