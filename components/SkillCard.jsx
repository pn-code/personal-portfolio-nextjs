export default function SkillCard({skillName}) {
  return (
    <article className="px-4 text-bold flex justify-center items-center bg-gray-200 text-gray-800 rounded-sm font-bold py-2 hover:bg-gray-800 hover:text-gray-50 ease-linear duration-200">
        <p>{skillName}</p>
    </article>
  )
}
