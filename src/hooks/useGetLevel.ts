import { trpc } from '../utils/trpc'; // Adjust the import path based on your project structure
import { useMe } from './useMe';

export function useGetLevel() {
  const { user, isLoading } = useMe();
  const userId = user?.id ?? '';

  // Using tRPC's useQuery hook to fetch user level
  const {
    data: level,
    isLoading: isLoadingLevel,
    isError,
    error,
  } = trpc.level.getUserLevel.useQuery(userId, {
    enabled: !!user?.id,
  });

  return {
    level,
    isLoading: isLoadingLevel,
    isError,
    error,
  };
}
