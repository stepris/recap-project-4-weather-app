import { uid } from "uid";

export function handleAddActivity(newActivity, activities, setActivities) {
  // console.log("new Activity", newActivity);
  // console.log("setActivities", setActivities);
  console.log("Hi");

  // setActivities(newActivity);
  setActivities([
    ...activities,
    {
      id: uid(),
      ...newActivity,
    },
  ]);
}

// export function handleDeleteActivity(idToDelete) {
//   setActivities(
//     activities.filter((activity) => {
//       return activity.id !== idToDelete;
//     })
//   );
// }
