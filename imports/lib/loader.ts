export default function useLoader(status: boolean, Component: React.Component) {
	if (status === true) {
		return Component;
	}
}
