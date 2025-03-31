type PageProps = {
    params: {
        city?: string[];
    };
};

export default function Page({ params }: PageProps) {
    const cityName = params.city ? params.city[0] : null;

    return (
        <div>
        </div>
    );
}