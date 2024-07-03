import { uid } from "uid";

export function handleAddActivity(newActivity, setActivities, activities) {
  console.log("new Activity", newActivity);
  console.log("setActivities", setActivities);
  console.log("activities", activities);

  setActivities(newActivity);
  // setActivities([
  //   ...activities,
  //   {
  //     id: uid(),
  //     ...newActivity,
  //   },
  // ]);
}

// export function handleDeleteActivity(idToDelete) {
//   setActivities(
//     activities.filter((activity) => {
//       return activity.id !== idToDelete;
//     })
//   );
// }
