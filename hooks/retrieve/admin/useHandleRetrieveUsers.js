import createSupabaseServerClient from "@/lib/server";

export const useHandleRetrieveUsers = async () => {
    const supabase = await createSupabaseServerClient();

    const retrieveRecentTeachers = async () => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .range(0, 2);
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const retrieveAllTeachers = async () => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .order("id", { ascending: false });
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const retrieveTeachersWithNoSubject = async () => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .is("subject_assigned", null);
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const retrieveRecentStudents = async () => {
        const { data: students, error } = await supabase
            .from("students")
            .select("*")
            .range(0, 2);
        const formatData = students.map(mapData);
        return formatData;
    };

    const retrieveAllStudents = async () => {
        const { data: students, error } = await supabase
            .from("students")
            .select("*")
            .order("id", { ascending: false });
        const formatData = students.map(mapData);
        return formatData;
    };

    const retrieveOwnData = async (userID) => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .eq("user_id", userID);
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const refetchData = (action) =>{
        return action;
    }

    return {
        retrieveRecentTeachers,
        retrieveRecentStudents,
        retrieveAllTeachers,
        retrieveAllStudents,
        retrieveTeachersWithNoSubject,
        retrieveOwnData,
        refetchData
    };
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

const mapData = (data) => {
    const formattedDate = formatDate(data.registration_date);
    return {
        ...data,
        registration_date: formattedDate,
    };
};
