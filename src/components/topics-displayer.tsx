export const TopicsDisplayer = ({
    topics,
}: {
    topics?: { name: string }[];
}) => {
    return (
        <div className="flex gap-1">
            {topics?.map((topic) => (
                <div
                    className="text-sm bg-grey px-3 py-1 rounded-xl"
                    key={topic.name}
                >
                    {topic.name}
                </div>
            ))}
        </div>
    );
};
