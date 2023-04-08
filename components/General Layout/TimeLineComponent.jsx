function TimeLineComponent({ moduleTitle, moduleDescription, moduleDuration }) {
  return (
    <li class="mr-6 lg:w-1/2 ">
      <span class="absolute z-30 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
      <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
        {moduleTitle}
      </h3>
      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {moduleDuration}
      </time>
      <p class="text-xl font-normal text-gray-500 dark:text-gray-400">
        {moduleDescription}
      </p>
    </li>
  );
}

export default TimeLineComponent;
